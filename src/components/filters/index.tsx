import { FaChevronDown } from "react-icons/fa";
import { Dropdown, Button } from "rizzui";

export default function Filters() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button as="span" variant="outline">
          All categories <FaChevronDown className="ml-2 w-5" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Account Settings</Dropdown.Item>
        <Dropdown.Item>Support</Dropdown.Item>
        <Dropdown.Item>License</Dropdown.Item>
        <Dropdown.Item>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
