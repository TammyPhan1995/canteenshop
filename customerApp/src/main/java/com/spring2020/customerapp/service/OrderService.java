package com.spring2020.customerapp.service;

import com.spring2020.customerapp.domain.dto.OrderDetailDto;
import com.spring2020.customerapp.domain.dto.OrderDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);

    void cancelOrder(int id);

    OrderDetailDto viewOrderDetail(Long id);

    Page<OrderDto> viewOrderHistory(Pageable pageable, int customerId);

}
