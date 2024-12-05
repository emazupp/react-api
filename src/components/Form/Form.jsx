import InputText from "./InputText";
import Checkbox from "./Checkbox";
import Select from "./Select";
export default function Form({ formData, handleCreate, handleChangeForm }) {
  return (
    <>
      <form onSubmit={handleCreate}>
        <InputText
          text="Titolo"
          name="title"
          formData={formData.title}
          handleChangeForm={handleChangeForm}
          required={true}
        />
        <InputText
          text="Immagine"
          name="image"
          formData={formData.image}
          handleChangeForm={handleChangeForm}
          required={false}
        />
        <InputText
          text="Autore"
          name="author"
          formData={formData.author}
          handleChangeForm={handleChangeForm}
          required={false}
        />

        <div className="d-flex justify-content-between">
          <Select
            handleChangeForm={handleChangeForm}
            formData={formData.category}
          />
          <Checkbox
            text="Published"
            handleChangeForm={handleChangeForm}
            formData={formData.status}
            name="status"
          />
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </div>
      </form>
    </>
  );
}
