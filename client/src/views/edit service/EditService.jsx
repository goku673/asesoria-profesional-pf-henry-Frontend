import { useEffect, useState } from 'react';
// import validationsService from './validations';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { updateService, getTypeServices, getService } from '../../Redux/actions';

const EditService = () => {
  const dispatch = useDispatch();

  const serv = useSelector((state) => state.oneActivity);

  const typeServices = useSelector((state) => state.typeServices);

 const [edit, setEdit] = useState({
    name: '',
    description: '',
    price: '',
    file: null,
    typeService: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    price: '',
    file: null,
    typeService: '',
  });

  useEffect(() => {
    dispatch(getTypeServices());
  }, []);

  console.log(edit);

  useEffect(() =>{
    dispatch(getService())
  }, [])

  const handleChange = (event) => {
    setEdit({
      ...edit,
      [event.target.name]:
        event.target.name === 'price'
          ? +event.target.value
          : event.target.value,
    });
    setErrors(
      validationsService({
        ...edit,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleFile = (e) => {
    const filed = e.target.files[0];
    setEdit({
      ...edit,
      file: filed,
    });
  };

  const handleSubmit = () => {
    // dispatch(updateService());
    console.log(edit);
  };

  return (
    <div className='w-full bg-white h-screen flex flex-col items-center justify-center mt-20'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col mx-auto px-10 shadow-lg p-10 w-3/4'
      >
        <span className='font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase'>
          EDIT SERVICE
        </span>
        <div className='w-full flex flex-col h-[80px] mt-10'>
          <input
            name='name'
            value={edit.name}
            onChange={handleChange}
            className='bg-gray-200 border border-gray-300 py-2 pl-2'
            placeholder={serv.name}
            type='text'
          />
          {errors.name && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
              <span className='material-symbols-outlined'>error</span>
              {errors.name}
            </div>
          )}
        </div>

        <div className='w-full flex flex-col h-[100px] mt-10'>
          <select
            name='typeService'
            onChange={handleChange}
            className='bg-slate-900 text-white py-2 rounded'
          >
            <option>Select a Service type</option>
            {typeServices?.map((type) => (
              <option>{type.type}</option>
            ))}
          </select>
          {errors.typeService && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
              <span className='material-symbols-outlined'>error</span>
              {errors.typeService}
            </div>
          )}
        </div>

        <div className='w-full flex flex-col h-[40px] mb-4'>
          <input
            name='price'
            value={Number(edit.price)}
            onChange={handleChange}
            className='bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]'
            type='text'
            placeholder={serv.price}
          />
          {errors.price && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
              <span className='material-symbols-outlined'>error</span>
              {errors.price}
            </div>
          )}
        </div>

        <div className='w-full flex flex-col h-[150px] mt-10'>
          <textarea
            name='description'
            value={edit.description}
            onChange={handleChange}
            className='bg-gray-200 border border-gray-300 py-2 pl-2 h-[100px]'
            placeholder={serv.description}
          />
          {errors.description && (
            <div className='flex ml-1 gap-1 text-red-600 mt-1'>
              <span className='material-symbols-outlined'>error</span>
              {errors.description}
            </div>
          )}
        </div>
        <div className='w-full flex flex-col h-[150px] mt-10'>
          <input
            name='file'
            className='mb-2'
            type='file'
            onChange={handleFile}
          />
          {errors.file && (
            <div className='flex ml-1 gap-1 text-red-600'>
              <span className='material-symbols-outlined'>error</span>
              {errors.file}
            </div>
          )}
        </div>
        <div className='flex'>
          <button
            type='submit'
            className='shadow-lg bg-slate-900 w-[180px] h-[40px] py-1 rounded uppercase text-white font-bold mx-auto mt-10 hover:bg-gray-800'
          >
            CONFIRM EDIT
          </button>
        </div>
      </form>
    </div>
  );
};


export default EditService;