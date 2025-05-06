
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { videoData } from './videoData';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Design Inspiration Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch curated videos from professional interior designers to inspire your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black aspect-video rounded-lg overflow-hidden relative">
              {activeVideo.embedUrl ? (
                <iframe
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-yusluv-dark">
                  <div className="text-white text-center p-6">
                    <PlayCircle size={48} className="mx-auto mb-4 text-yusluv-gold" />
                    <p>Video preview not available</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 text-white border-white hover:bg-white hover:text-yusluv-dark"
                      onClick={() => window.open(activeVideo.sourceUrl, '_blank')}
                    >
                      View on Source <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">{activeVideo.title}</h3>
              <p className="text-gray-600 mt-2">{activeVideo.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-sm text-gray-500">Source: {activeVideo.source}</span>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="ml-4"
                  onClick={() => window.open(activeVideo.sourceUrl, '_blank')}
                >
                  View Original <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Video Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">More Design Videos</h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {videoData.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full flex items-start p-3 rounded-lg transition-all ${
                    activeVideo.id === video.id 
                      ? 'bg-yusluv-gold/10 border-l-4 border-yusluv-gold' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="w-24 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden relative">
                    {video.thumbnail ? (
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-yusluv-dark">
                        <PlayCircle size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="ml-3 text-left">
                    <h4 className="text-sm font-medium line-clamp-1">{video.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{video.source}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
