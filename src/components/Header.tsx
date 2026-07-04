/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, RefreshCw, Menu, HelpCircle, ShieldAlert, BookOpen, Download } from 'lucide-react';

interface HeaderProps {
  onNewPostClick: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  onShowGuidelines: () => void;
  onShowPolicies: () => void;
  onNavigate: (path: string) => void;
}

export default function Header({
  onNewPostClick,
  onRefresh,
  isRefreshing,
  onShowGuidelines,
  onShowPolicies,
  onNavigate,
}: HeaderProps) {
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  return (
    <header className="border-b border-zinc-900 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 px-4 py-3 sm:px-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co/RpqhT7QZ/14893-removebg-preview.png" 
            alt="Venom Logo" 
            className="w-11 h-11 object-contain select-none drop-shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-transform duration-500 hover:scale-110 active:scale-95 cursor-pointer"
            referrerPolicy="no-referrer"
            onClick={() => onNavigate('/')}
          />
          <div className="cursor-pointer" onClick={() => onNavigate('/')}>
            <h1 className="text-lg font-black tracking-widest font-display text-emerald-400 select-none">
              VENOM
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase select-none">
              Official Hub
            </p>
          </div>
        </div>

        {/* Action Controls - Menu beside Refresh, beside Create Post */}
        <div className="flex items-center gap-2">
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono font-bold uppercase text-zinc-500 mr-3">
            <button
              onClick={() => onNavigate('/guidelines')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Guidelines
            </button>
            <button
              onClick={() => onNavigate('/policies')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Policies
            </button>
            <button
              onClick={() => onNavigate('/report')}
              className="hover:text-rose-400 transition-colors cursor-pointer text-rose-500/70"
            >
              Report
            </button>
            <button
              onClick={() => {
                if ((window as any).triggerPwaInstall) {
                  (window as any).triggerPwaInstall('main');
                }
              }}
              className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1 text-emerald-500/70"
            >
              <Download className="w-3 h-3" />
              <span>Install</span>
            </button>
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="p-2 border border-zinc-850 hover:border-emerald-500/30 rounded bg-zinc-900/40 hover:bg-zinc-950 text-zinc-400 hover:text-emerald-400 disabled:opacity-50 transition-colors cursor-pointer"
            title="Reload Feed"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          {/* Create Post Button (Desktop only) */}
          <button
            onClick={onNewPostClick}
            className="hidden md:block px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-sans font-bold tracking-wide rounded transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            + Create Post
          </button>

        </div>
      </div>
    </header>
  );
}
