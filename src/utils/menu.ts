const menu = document.querySelector(".menu-block") as HTMLElement;
const menuMain = menu.querySelector(".site-menu-main") as HTMLElement;
const submenuAll = menu.querySelectorAll(
  ".sub-menu"
) as NodeListOf<HTMLElement>;
const goBack = menu.querySelector(".go-back") as HTMLElement;
const menuTrigger = document.querySelector(
  ".mobile-menu-trigger"
) as HTMLElement;
const closeMenu = menu.querySelector(".mobile-menu-close") as HTMLElement;
let subMenu: HTMLElement | null;
const subMenuArray: string[] = [];
const subMenuTextArray: string[] = [];

function last(array: string[]): string {
  return array[array.length - 1];
}

function last2(array: string[]): string {
  return array[array.length - 2];
}

function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay")?.classList.toggle("active");
}

function showSubMenu(hasChildren: HTMLElement) {
  for (let i = 0; i < submenuAll.length; i++) {
    submenuAll[i].classList.remove("active");
  }
  subMenu = hasChildren.querySelector(".sub-menu") as HTMLElement;
  subMenuArray.push(subMenu.id);
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector(".drop-trigger")?.textContent || "";
  subMenuTextArray.push(menuTitle);

  menu.querySelector(".current-menu-title")!.innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head")?.classList.add("active");
}

goBack.addEventListener("click", () => {
  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);
  subMenuArray.pop();
  subMenuTextArray.pop();
  if (subMenuArray.length >= 0) {
    document.getElementById(lastItem)!.style.animation =
      "slideRight 0.5s ease forwards";
    menu.querySelector(".current-menu-title")!.innerHTML = lastItemText;
    setTimeout(() => {
      document.getElementById(lastItem)!.classList.remove("active");
    }, 300);
  }
  if (subMenuArray.length === 0) {
    menu.querySelector(".mobile-menu-head")?.classList.remove("active");
  }
});

menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target && (e.target as HTMLElement).closest(".nav-item-has-children")) {
    const hasChildren = (e.target as HTMLElement).closest(
      ".nav-item-has-children"
    ) as HTMLElement;
    showSubMenu(hasChildren);
  }
});

menuTrigger.addEventListener("click", () => {
  toggleMenu();
});

closeMenu.addEventListener("click", () => {
  toggleMenu();
});

document.querySelector(".menu-overlay")?.addEventListener("click", () => {
  toggleMenu();
});

// window.onresize = function () {
//   if (this.innerWidth > 991) {
//     if (menu.classList.contains("active")) {
//       toggleMenu();
//     }
//   }
// };
