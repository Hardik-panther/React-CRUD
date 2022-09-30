import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { baseurl } from '../../Baseurl/BaseURL';
import Postservice from '../../Service/Postservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentsData03(props) {
    const navigate = useNavigate()
    const [flag, setflag] = useState()
    const [images, setImage] = useState()
    const [imagefile, setImagefile] = useState()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const param = useParams()

    const onSubmit = (data) => {
        props.studentdata(data)

        let formdata = new FormData()
        formdata.append("name", props.formdata.name)
        formdata.append("father_name", props.formdata.father_name)
        formdata.append("mother_name", props.formdata.mother_name)
        formdata.append("contact_no", props.formdata.contact_no)
        formdata.append("address", props.formdata.address)
        formdata.append("city", props.formdata.city)
        formdata.append("state", props.formdata.state)
        formdata.append("country", props.formdata.country)
        formdata.append("school", data.school)
        formdata.append("standard", data.standard)
        formdata.append("mark", data.mark)
        param.id ? formdata.append("images", null) : formdata.append("images", imagefile)

        if (param.id) {
            console.log("editeddata", param.id)
            let id = props.formdata.id;

            Postservice.update_Data(id, formdata)
                .then((res) => {
                    setflag(false)
                    toast.success(res)
                    navigate("/dashbord")
                })
                .catch((error) => {
                    toast.error("error")
                })
        } else {
            Postservice.create_Data(formdata)
                .then((res) => {
                    toast.success(res)
                    navigate("/dashbord")

                })
                .catch((error) => {
                    console.log("error main data->", error)
                })
            setflag(true)
        }
    }

    useEffect(() => {
        reset(
            {
                school: props.formdata.school,
                standard: props.formdata.standard,
                mark: props.formdata.mark,
                images: props.formdata.image
            }
        )
    }, [props.formdata])
    console.log("img", props.formdata.image)

    return (
        <>
            <section className="content ">
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-md-10 my-5">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Student Form Step-3</h3>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                        <div className=" form-group mb-3">
                                            <label>School</label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="school"
                                                {...register("school", { required: true })}
                                            />
                                            {errors.school?.type === 'required' && <p className='text-danger'>school  is required</p>}

                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Standard</label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="standard"
                                                {...register("standard", { required: true })}
                                            />
                                            {errors.standard?.type === 'required' && <p className='text-danger'>*standard  is required</p>}

                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Mark</label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="mark"
                                                {...register("mark", { required: true })}
                                            />
                                            {errors.mark?.type === 'required' && <p className='text-danger'>mark  is required</p>}

                                        </div>
                                        <div className="form-group">
                                            <label>Images</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input
                                                        type="file"

                                                        accept='image/*'
                                                        className="custom-file-input"
                                                        id="exampleInputFile"
                                                        {...register("images", {
                                                            required: flag,


                                                            onChange: (e) => {
                                                                const [file] = e.target.files
                                                                setImagefile(file)
                                                                setImage(URL.createObjectURL(file))
                                                            }
                                                        })}
                                                    />
                                                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                </div>
                                            </div>
                                            <img src={images ? images : baseurl + props.formdata.image} />
                                            {/* {console.log("imimimg", baseurl + props.formdata.image, getValues('images'))} */}
                                            {errors.images?.type === 'required' && <p className='text-danger'>image  is required</p>}
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex my-2">
                                        <button type="button" className="btn btn-primary btn mx-2 " onClick={props.previousStep}>Previous</button>

                                        <button type="submit" className="btn btn-primary btn-block"  >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </section>
        </>
    )
}

export default StudentsData03
