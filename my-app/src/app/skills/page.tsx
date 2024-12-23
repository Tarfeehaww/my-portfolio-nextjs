export default function Skills() {
    return (
      <div id="skills" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl md:text-5xl font-bold mb-6">Technologies I Work With</h2>
          <p className="text-gray-600 mb-12">Below are the technologies I have experience with:</p>
  
          <div className="space-y-8">
            <div>
              <p className="text-lg font-semibold">HTML</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-right mt-1">60%</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">CSS</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="text-sm text-right mt-1">50%</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">TypeScript</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-right mt-1">40%</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">Next.js</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="text-sm text-right mt-1">50%</p>
            </div>
  
            <div>
              <p className="text-lg font-semibold">Tailwind CSS</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm text-right mt-1">45%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  