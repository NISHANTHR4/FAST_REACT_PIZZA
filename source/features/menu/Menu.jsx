import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="px-2 divide-y divide-stone-200">
      {menu.map((burger) => (
        <MenuItem burger={burger} key={burger.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
