package com.luv2code.ecommerce.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.EqualsAndHashCode;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class PurchaseResponse {

        private String orderTrackingNumber;

        public PurchaseResponse(String orderTrackingNumber) {
                this.orderTrackingNumber = orderTrackingNumber;
        }
}



//package com.luv2code.ecommerce.dto;

//import lombok.Data;


//@Data
//public class PurchaseResponse {

  //      private final String orderTrackingNumber;
//}
