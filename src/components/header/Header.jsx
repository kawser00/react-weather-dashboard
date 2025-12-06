import { useState } from "react";

import Logo from "./Logo";
import Search from "./Search";
import Favorite from "./Favorite.jsx";
import FavoriteListModal from "./FavoriteListModal.jsx";

function Header() {
  const [showFavModal, setShowFavModal] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favorite onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavoriteListModal />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
