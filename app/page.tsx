export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#102027', // dark background for contrast with light teal gradient text
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '4rem',
          background:
            'linear-gradient(90deg, #a7ffeb 0%, #64ffda 50%, #26a69a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Hello Trevor
      </h1>
    </main>
  )
}
