import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, SortAsc, Search } from 'lucide-react';
import { products as allProducts } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Product } from '../types';

type SortOption = 'featured' | 'newest' | 'price-low' | 'price-high' | 'best-rated';
type ViewMode = 'grid' | 'list';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        // In a real app, you'd sort by date
        break;
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'best-rated':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        filteredProducts.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
    }

    setProducts(filteredProducts);
  }, [searchQuery, selectedCategories, sortBy]);

  // Handle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">
            Browse our collection of premium digital products
          </p>
        </div>

        {/* Search and filters header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search size={18} />}
                fullWidth
              />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<Filter size={16} />}
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>

              <div className="hidden md:flex border-l border-gray-200 pl-3 ml-2">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'outline'}
                  size="sm"
                  className="px-2"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'outline'}
                  size="sm"
                  className="px-2"
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </Button>
              </div>

              <div className="hidden md:block border-l border-gray-200 pl-4 ml-2">
                <div className="flex items-center">
                  <SortAsc size={16} className="mr-2 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="text-sm border-none bg-transparent focus:outline-none focus:ring-0"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="best-rated">Best Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile sort options */}
          <div className="md:hidden mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'outline'}
                size="sm"
                className="px-2"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={18} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'primary' : 'outline'}
                size="sm"
                className="px-2"
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </Button>
            </div>

            <div className="flex items-center">
              <SortAsc size={16} className="mr-2 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-sm border-none bg-transparent focus:outline-none focus:ring-0"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="best-rated">Best Rated</option>
              </select>
            </div>
          </div>

          {/* Filter tags */}
          {selectedCategories.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500">Filters:</span>
              {selectedCategories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => toggleCategory(category)}
                >
                  {category} &times;
                </Badge>
              ))}
              <Button
                variant="link"
                size="sm"
                className="text-gray-500 ml-2"
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
          )}

          {/* Expanded filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategories.includes(category)
                        ? 'primary'
                        : 'outline'
                    }
                    size="sm"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {products.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products grid/list */}
        {products.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'flex flex-col gap-6'
            }
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                layout={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No products found matching your criteria
            </p>
            <Button onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;