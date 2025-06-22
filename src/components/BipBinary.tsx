import React, { useState, useMemo } from 'react';
import { Shield, ArrowLeft, Search, X } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');

  // Filter words based on search term (search by index or word)
  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) {
      return bip39Words.map((word, index) => ({ word, index }));
    }

    const searchLower = searchTerm.toLowerCase().trim();
    
    return bip39Words
      .map((word, index) => ({ word, index }))
      .filter(({ word, index }) => {
        // Search by word (partial match)
        const wordMatch = word.toLowerCase().includes(searchLower);
        
        // Search by index (exact match or starts with)
        const indexMatch = index.toString().includes(searchLower);
        
        return wordMatch || indexMatch;
      });
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
  };

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
            All 2048 BIP39 words with their indices and 11-bit binary representations.
            Filled circles represent 1s, empty circles represent 0s.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by index or word..."
              className="block w-full pl-10 pr-10 py-3 border border-slate-600 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-300 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="mt-2 text-sm text-slate-400">
              Found {filteredWords.length} result{filteredWords.length !== 1 ? 's' : ''} for "{searchTerm}"
            </div>
          )}
        </div>

        {/* Table Container with Scrollbar */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
            <table className="w-full">
              <thead className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Index
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    BIP39 Word
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Binary 
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {filteredWords.length > 0 ? (
                  filteredWords.map(({ word, index }) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-mono text-cyan-400 bg-slate-800 px-3 py-1 rounded-md inline-block">
                          {index.toString().padStart(4, '0')}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                      <div className="text-slate-400">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">No results found</p>
                        <p className="text-sm">Try searching with a different term</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Binary Guide</h3>
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
            <p className="mt-2 font-medium text-slate-300">Search Tips:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Search by word: Type any part of a BIP39 word (e.g., "aban" finds "abandon")</li>
              <li>Search by index: Type the index number (e.g., "0", "42", "1999")</li>
              <li>Search is case-insensitive and supports partial matches</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BipBinary;