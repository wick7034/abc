import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { bip39Words } from '../data/bip39Words';

interface BinaryCircleProps {
  bit: string;
}

const BinaryCircle: React.FC<BinaryCircleProps> = ({ bit }) => {
  return (
    <div className={`w-4 h-4 rounded-full border-2 border-slate-400 inline-block mx-0.5 ${
      bit === '1' ? 'bg-cyan-400 border-cyan-400' : 'bg-transparent'
    }`} />
  );
};

interface BinaryDisplayProps {
  index: number;
}

const BinaryDisplay: React.FC<BinaryDisplayProps> = ({ index }) => {
  // Convert index to 11-bit binary (since 2^11 = 2048 > 2047)
  const binary = index.toString(2).padStart(11, '0');
  
  return (
    <div className="flex items-center justify-center space-x-1 py-2">
      {binary.split('').map((bit, bitIndex) => (
        <BinaryCircle key={bitIndex} bit={bit} />
      ))}
    </div>
  );
};

interface BipBinaryProps {
  onBack: () => void;
}

const BipBinary: React.FC<BipBinaryProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  BIP Binary
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            BIP39 Binary Reference
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            First 100 BIP39 words with their indices and 11-bit binary representations in OMR format.
            Filled circles represent 1s, empty circles represent 0s.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Index
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    BIP39 Word
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Binary (OMR Style)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {bip39Words.map((word, index) => (
                  <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-mono text-cyan-400 bg-slate-800 px-3 py-1 rounded-md inline-block">
                        {index.toString().padStart(3, '0')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-semibold text-white">
                        {word}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <BinaryDisplay index={index} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">OMR Binary Legend</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <BinaryCircle bit="0" />
              <span className="text-slate-300">Empty Circle = Binary 0</span>
            </div>
            <div className="flex items-center space-x-4">
              <BinaryCircle bit="1" />
              <span className="text-slate-300">Filled Circle = Binary 1</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-400">
            <p>Each word index is represented as an 11-bit binary number (2^11 = 2048 possible values).</p>
            <p>This format is commonly used in Optical Mark Recognition (OMR) systems for data encoding.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BipBinary;