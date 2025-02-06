package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;


// asagidaki CrossOrigin frontendi baslattiktan sonra ürün bilgilerini görememe hatasi olan Common Pitfall icin.
@CrossOrigin("http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {

    // http://localhost:8080/api/products/search/findByCategoryId?id={categoryId}&page=0&size=20
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // http://localhost:8080/api/products/search/findByNameContaining?name=Java
    // http://localhost:8080/api/products/search/findByNameContaining?name={productName}&page={pageNumber}&size={pageSize}
    Page<Product> findByNameContaining(@Param("name") String name, Pageable page);

}
