// eslint-disable-next-line react/prop-types
export default function Header({ active, onChange }) {
  return (
    <header className="header">
      <div className="header_block">
        <button
          class="button_Header"
          isActive={active === "me"}
          onClick={() => onChange("me")}
          is={"me"}
        >
          обо мне
        </button>
        <button
          class="button_Header"
          isActive={active === "works"}
          onClick={() => onChange("works")}
          is={"works"}
        >
          мои работы
        </button>
        <button
          class="button_Header"
          isActive={active === "contacts"}
          onClick={() => onChange("contacts")}
          is={"contacts"}
        >
          контакты
        </button>
      </div>
    </header>
  );
}
