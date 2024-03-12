export class OrderCreateDto {
  name: string;
  addressId: string;
  phoneNumber: string;
  dontRingTheDoorbell: boolean;
  leaveItAtTheDoor: boolean;
  comment: string;
  typePayment: any;
  status: any;
  typeDelivery: any;
}
