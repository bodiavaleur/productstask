import { useState } from "react";
import { GlobalStyle } from "./globalStyle";
import { AppWrapper, AppHeader, AppContent } from "./ui/templates/";
import { ProductsList } from "./ui/organisms";
import { ProductCard } from "./ui/molecules";
import { Description, Input, PageTitle, PreviewImage, Price } from "./ui/atoms";
import ReactPaginate from "react-paginate";
import { useProducts } from "./useProducts";

export function App() {
  const products = useProducts();
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedProducts = searchQuery
    ? products[page].filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products[page];

  const handlePageChange = ({ selected }) => setPage(selected);
  const formatName = (name) =>
    name.length > 50 ? name.slice(0, 50) + "..." : name;

  return (
    <>
      <GlobalStyle />

      <AppWrapper>
        <AppHeader>
          <PageTitle>Products</PageTitle>
          <Input
            placeholder="Search"
            onChange={(evt) => setSearchQuery(evt.target.value)}
          />
        </AppHeader>
        <AppContent>
          {selectedProducts && (
            <>
              <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                pageCount={products.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="pagination__page--active"
                pageClassName="pagination__page"
                previousClassName="pagination__previous"
                nextClassName="pagination__next"
              />

              <ProductsList>
                {selectedProducts.map((product) => (
                  <ProductCard
                    key={product.asin}
                    href={product.link}
                    target="_blank"
                  >
                    <PreviewImage src={product.img} />
                    <Price>{product.price}$</Price>
                    <Description>{formatName(product.name)}</Description>
                  </ProductCard>
                ))}
              </ProductsList>
            </>
          )}
        </AppContent>
      </AppWrapper>
    </>
  );
}
