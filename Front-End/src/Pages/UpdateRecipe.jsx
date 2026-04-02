import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react';
const UpdateRecipe = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const getRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/recipes/${id}`);
            reset(response.data); // Populate the form with the fetched recipe data ||  just like in onchange we set the value of the input field to the state variable, here we are setting the value of the input field to the data we get from the server
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getRecipe() }, [id]);

    const submitHandler = async (data) => {
        try {
            const response = await axios.put(`http://localhost:3000/recipes/${id}`, { ...data });
            if (response.status === 200) {
                toast.success('Recipe updated successfully!');
                navigate('/');
                reset();
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input   {...register('recipeName')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="text" placeholder='Recipe Name' /> <br />
                <input  {...register('recipeImage')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="text" placeholder='Recipe Image ( URL )' /> <br />
                <input  {...register('chefName')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="text" placeholder='Chef Name' /> <br />
                <input  {...register('Ingredients')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="text" placeholder='Ingrdients' /> <br />
                <input  {...register('time')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="time" placeholder='Recipe Name' /> <br />
                <select  {...register('category')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' name="category" id="category">
                    <option value="">Select Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select> <br />
                <input {...register('description')} className='w-[50vw] h-[8vh] bg-zinc-900 text-white' type="text" placeholder='Description' /> <br />
                <button type='submit'>Update</button>
            </form>
        </div >
    )
}

export default UpdateRecipe;