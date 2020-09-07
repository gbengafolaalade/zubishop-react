import Orders from "./orders.component";
import Order from "./order.component";
import Address from "./address.component";
import WishList from "./wishlist.component";
import PersonalInfo from "./personal-info.component";

// @TODO: Fix page reload issue
const Routes = [
  { exact: true, path: "/accounts/orders", main: Orders },
  { path: "/accounts/orders/:id", main: Order },
  { exact: true, path: "/accounts/address", main: Address },
  { exact: true, path: "/accounts/wishlist", main: WishList },
  { exact: true, path: "/accounts/personal-info", main: PersonalInfo },
];

export default Routes;
