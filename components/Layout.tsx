import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full transition-all duration-300 max-w-screen-lg mx-auto overflow-hidden">
      <Header /> {children} <Footer />
    </div>
  );
}
