package com.spring2020.coffeeshop.domain.dto;

import com.spring2020.coffeeshop.domain.ProductForOrderDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailDto {

    private Long id;

    private int quantity;

    private ProductForOrderDto product;

}
