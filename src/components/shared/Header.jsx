import { useWeb3ModalTheme } from "@web3modal/ethers/react";
import Mx1 from "./Mx1";
import { Link } from "react-router-dom";

export default function Header() {
  const { setThemeVariables } = useWeb3ModalTheme();

  setThemeVariables({
    "--w3m-font-size-master": "9px",
  });

  return (
    <div className="flex items-center w-full h-24">
      <Mx1 className="flex items-center justify-between h-full">
        <div className="flex items-center">
          <h1 className="text-foreground text-lg font-semibold pr-10 border-r">
            MeetMe
          </h1>
          <div className="flex items-center gap-6 pl-10">
            <Link
              to="/"
              className="hover:text-primary text-foreground text-base font-light">
              Case Studies
            </Link>
            <Link
              to="/"
              className="hover:text-primary text-foreground text-base font-light">
              Out Team
            </Link>
            <Link
              to="/"
              className="hover:text-primary text-foreground text-base font-light">
              Careers
            </Link>
            <Link
              to="/"
              className="hover:text-primary text-foreground text-base font-light">
              Resources
            </Link>
          </div>
        </div>

        <w3m-button />
      </Mx1>
    </div>
  );
}
