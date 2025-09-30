"use client"

export function NeuralNetwork3D() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-4 p-8">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="bg-purple-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
