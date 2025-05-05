import { useState } from "preact/hooks";

export function Nav() {
  const [open, setOpen] = useState(false);

  function Data() {
    setOpen(!open);

    open == true
      ? console.log("Es verdadero: ", open)
      : console.log("Es falso: ", open);
  }

  return (
    <header>
      <nav id="nav" class="w-full md:h-20">
        <div class="w-full flex flex-col">
          <button
            onClick={Data}
            class="cursor-pointer p-1 m-1 self-end md:hidden"
            id="btn"
          >
            <i class="bi bi-list text-5xl text-white"></i>
          </button>
        </div>
        <div
          id="bottom-nav"
          class={`flex flex-col justify-center items-center w-full ${open == true ? "h-72" : "h-0"} md:text-center overflow-hidden gap-8 transition-all 
          ease-in-out duration-300 md:visible md:flex-row md:h-full`}
        >
          <NavItem icon="bi bi-house-heart" text="Home" url="/" />
          <NavItem icon="bi bi-journal" text="Blog" url="blog" />
          <NavItem icon="bi bi-robot" text="Project" url="project" />
        </div>
      </nav>
    </header>
  );
}

function NavItem({ url, icon, text }) {
  return (
    <a
      href={url}
      class="text-white cursor-pointer w-fit  h-auto  text-start md:text-center text-3xl hover:text-black md:p-5 md:hover:bg-amber-50"
    >
      {text}
      <i class={`${icon}`}></i>
    </a>
  );
}
