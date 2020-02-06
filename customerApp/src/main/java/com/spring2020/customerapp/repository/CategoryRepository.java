package com.spring2020.customerapp.repository;

import com.spring2020.customerapp.domain.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Page<Category> findByNameContaining(String name, Pageable pageable);
}
