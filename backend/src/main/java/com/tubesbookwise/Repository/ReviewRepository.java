package com.tubesbookwise.Repository;

import com.tubesbookwise.Models.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ReviewRepository extends JpaRepository<Review, UUID> {
    Page<Review> findByBookId(String bookId, Pageable pageable);
    
    @NonNull
    @Override
    Page<Review> findAll(@NonNull Pageable pageable);

    @Query("SELECT AVG(r.rating) FROM Review r")
    Double findAverageRating();
}