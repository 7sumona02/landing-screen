export default function Welcome() {
    return (
      <div className="bg-neutral-50 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
        <div className="space-x-4">
          <a href="/create-account">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Create Account
            </button>
          </a>
          <a href="/login">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Login
            </button>
          </a>
        </div>
      </div>
    );
  }