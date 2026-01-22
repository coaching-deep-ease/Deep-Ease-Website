import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-organic-cream">
      
      {/* Pastel Blobs - Sage (Left) and Sky (Right) dominance */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-organic-sage/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
      
      <div className="absolute top-[0%] right-[-10%] w-[700px] h-[700px] bg-organic-sky/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-[#e6e6fa]/50 (lavender) rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
      
      <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] bg-organic-sage/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-2000"></div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default AuroraBackground;