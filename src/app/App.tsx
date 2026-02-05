import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { EntityPage } from './pages/EntityPage';
import {
  categories,
  getEntitiesByCategory,
  getEntityBySlug,
} from './data/mockData';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleEntityClick = (slug: string) => {
    handleNavigate(`/entity/${slug}`);
  };

  // Parse current route
  const pathParts = currentPath.split('/').filter(Boolean);
  const isHome = currentPath === '/';
  const isCategoryPage = pathParts.length === 1 && categories.some((c) => c.slug === pathParts[0]);
  const isEntityPage = pathParts.length === 2 && pathParts[0] === 'entity';

  // Get current category or entity
  const currentCategory = isCategoryPage
    ? categories.find((c) => c.slug === pathParts[0])
    : null;
  const currentEntity = isEntityPage ? getEntityBySlug(pathParts[1]) : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onNavigate={handleNavigate} currentPath={currentPath} />

      <main className="flex-1">
        {isHome && <HomePage onNavigate={handleNavigate} />}

        {isCategoryPage && currentCategory && (
          <CategoryPage
            title={currentCategory.name}
            description={currentCategory.description}
            entities={getEntitiesByCategory(currentCategory.slug)}
            onNavigate={handleNavigate}
            onEntityClick={handleEntityClick}
          />
        )}

        {isEntityPage && currentEntity && (
          <EntityPage entity={currentEntity} onNavigate={handleNavigate} />
        )}

        {!isHome && !isCategoryPage && !isEntityPage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Page not found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <button
              onClick={() => handleNavigate('/')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Return to home
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}