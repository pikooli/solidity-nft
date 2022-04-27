import React from "react";
import { useRouter } from "next/router";
import Link from "components/link/Link";

type Props = { className?: string };

const LinkPage = ({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: string;
}) => {
  return (
    <li className="nav-item">
      <Link
        href={href}
        text={text}
        className={`nav-link ${active || ""}`}
        aria-current="page"
      ></Link>
    </li>
  );
};

const NavLink: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const active = { [router.pathname as string]: "active" };

  return (
    <ul className={`lg:flex ${className || ""}`}>
      <LinkPage href="/nfts" text={"nfts"} active={active["/nfts"]} />
      <LinkPage
        href="/transfers"
        text={"transfers"}
        active={active["/transfers"]}
      />
    </ul>
  );
};

export default NavLink;