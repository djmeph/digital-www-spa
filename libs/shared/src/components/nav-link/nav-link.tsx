import { useRouter } from 'next/navigation';
import { Nav } from 'react-bootstrap';

import { useNavbarContext } from '../../context/navbar';

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  const router = useRouter();
  const { setExpanded } = useNavbarContext();
  return (
    <Nav.Link
      href={to}
      className="py-1"
      onClick={(e) => {
        e.preventDefault();
        setExpanded(false);
        return router.push(to);
      }}
    >
      {children}
    </Nav.Link>
  );
}

export default NavLink;
