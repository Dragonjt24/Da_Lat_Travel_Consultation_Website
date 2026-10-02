import Navbar from "../components/navigation/Navbar";

type MainLayoutProps = {
    children: React.ReactNode;
    };

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-wwhite">

            <Navbar />
            
            <main> 
                {children}
            </main>

            <footer className="border-t bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <p className="text-center text-sm text-gray-500">
                        © 2026 DalatTour. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default MainLayout;