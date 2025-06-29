import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { ButtonUpdate } from "../Button/ButtonUpdate";
import { ButtonDelete } from "../Button/ButtonDelete";
import toast from "react-hot-toast";
import {
  itemExists,
  createItem,
  getItems,
  deleteItem,
  updateItem,
} from "../../utils/setupFunctions";

import { ModalSetup } from "../Modal/ModalSetup";

export const SetupBox = ({ title }) => {
  const [items, setItems] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const unsubscribe = getItems(title.toLowerCase(), setItems);
    return () => unsubscribe();
  }, [title]);

  const handleDelete = async (id, name) => {
    try {
      await deleteItem(title.toLowerCase(), id);
      toast.success(`${name} deletado com sucesso!`);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao deletar item!");
    }
  };

  const handleAdd = () => {
    setItemToEdit(null);
    setActiveModal(true);
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
    setActiveModal(true);
  };

  const handleSaveItem = async ({ name, id }) => {
    const trimmedName = name.trim();
    const exists = await itemExists(title.toLowerCase(), trimmedName);
    const isSameName = itemToEdit && itemToEdit.name === trimmedName;

    if (exists && !isSameName) {
      toast.error("Já existe item com o mesmo nome");
      return;
    }

    try {
      if (id) {
        await updateItem(title.toLowerCase(), id, { name: trimmedName });
        toast.success("Item atualizado com sucesso!");
      } else {
        await createItem(title.toLowerCase(), { name: trimmedName });
        toast.success("Item criado com sucesso!");
      }

      setActiveModal(false);
      setItemToEdit(null);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao salvar item.");
    }
  };

  return (
    <div className="bg-zinc-100 p-4 rounded-xl w-full max-w-[400px] transition-all">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <button
          onClick={handleAdd}
          className="bg-secondary text-white p-2 rounded-full cursor-pointer text-base"
          title={`Add ${title}`}
        >
          <IoAddOutline className="text-xl" />
        </button>
      </div>

      <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1 rounded-md">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-md p-2 flex justify-between items-center"
          >
            <span className="text-black text-sm">{item.name}</span>
            <div className="flex gap-2">
              <ButtonUpdate onClick={() => handleEdit(item)} />
              <ButtonDelete onClick={() => handleDelete(item.id, item.name)} />
            </div>
          </li>
        ))}
      </ul>

      {activeModal && (
        <ModalSetup
          title={title}
          itemToEdit={itemToEdit}
          handleClose={() => setActiveModal(false)}
          onSubmit={handleSaveItem}
        />
      )}
    </div>
  );
};
