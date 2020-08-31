import Orders from "./orders.component";
import Order from "./order.component";
import Address from "./address.component";
import WishList from "./wishlist.component";
import PersonalInfo from "./personal-info.component";

const Routes = [
  { exact: true, path: "/accounts/orders", main: Orders },
  { path: "/accounts/orders/:id", main: Order },
  { path: "/accounts/address", main: Address },
  { path: "/accounts/wishlist", main: WishList },
  { path: "/accounts/personal-info", main: PersonalInfo },
];

export default Routes;
