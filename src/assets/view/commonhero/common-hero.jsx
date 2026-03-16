import React from 'react';

export default function Hero({ title, breadcrumbs = [{ label: 'Home'}], backgroundImage }) {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      {/* Background Image - Full width on all devices */}
      {backgroundImage && (
        <div className="absolute inset-0 md:left-[60%] md:right-0">
          <img 
            src={backgroundImage}
            alt="Hero" 
            className="w-full h-full object-cover object-center md:object-[75%_center]"
            style={{ 
              imageRendering: 'auto',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitFontSmoothing: 'antialiased'
            }}
            loading="eager"
            decoding="async"
          />
          {/* Subtle blend edge on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-800 to-transparent"></div>
        </div>
      )}

      {/* Blue overlay with patterns - covers image on mobile, partial on desktop */}
      <div className="relative w-full md:w-3/5 h-full bg-gradient-to-br from-blue-800/95 via-blue-900/95 to-blue-800/95 md:from-blue-800 md:via-blue-900 md:to-blue-800">
        {/* Metallic sheen overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-white/[0.05] via-transparent to-transparent"></div>
        </div>
        
        {/* Starfield/Galaxy pattern */}
        <div className="absolute inset-0">
          {/* Large stars */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white, transparent), radial-gradient(2px 2px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 10%, white, transparent), radial-gradient(2px 2px at 90% 60%, white, transparent), radial-gradient(1px 1px at 33% 80%, white, transparent), radial-gradient(1px 1px at 15% 60%, white, transparent)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%'
          }}></div>
          
          {/* Small stars scattered */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(1px 1px at 25% 40%, rgba(251, 191, 36, 0.8), transparent), radial-gradient(1px 1px at 75% 25%, rgba(251, 191, 36, 0.6), transparent), radial-gradient(1px 1px at 45% 65%, white, transparent), radial-gradient(1px 1px at 85% 75%, white, transparent), radial-gradient(1px 1px at 10% 85%, rgba(251, 191, 36, 0.7), transparent)',
            backgroundSize: '250% 250%'
          }}></div>
          
          {/* Nebula clouds effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl"></div>
        </div>
        
        {/* Subtle constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="30%" x2="35%" y2="45%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="0.5"/>
          <line x1="35%" y1="45%" x2="50%" y2="40%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="0.5"/>
          <line x1="60%" y1="60%" x2="75%" y2="70%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5"/>
          <circle cx="20%" cy="30%" r="2" fill="rgba(251, 191, 36, 0.6)"/>
          <circle cx="35%" cy="45%" r="2" fill="rgba(251, 191, 36, 0.6)"/>
          <circle cx="50%" cy="40%" r="2" fill="rgba(251, 191, 36, 0.6)"/>
        </svg>
        
        {/* Corner accent */}
        <div className="absolute top-0 left-0 z-20 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-amber-400 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center z-30">
          <div className="w-full px-8 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 text-sm font-medium">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <a 
                      href={crumb.href || '/'} 
                      className="text-blue-100 hover:text-amber-400 transition-colors"
                    >
                      {crumb.label}
                    </a>
                    <div className=" text-amber-400 rounded-full">››</div>
                  </React.Fragment>
                ))}
                <span className="text-amber-400 font-semibold">{title}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                {title || "International Conference"}
              </h1>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
