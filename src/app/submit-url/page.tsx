import UrlForm from './UrlForm';

export default function SubmitUrlPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
            <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">Submit a Website</h1>
                <UrlForm />
            </div>
        </div>
    </main>

  );
}
