import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from './Button.component';

import Storagecito from "../utils/localstorage.service";



const New_patient_info = () => {

    const [form, setForm] = useState({
        rut_pat:'',
        question01: '',
        question02: '',
        question03: '',
        question04: '',
        question05: '',
        question06: '',
        question07: '',
        question08: '',
        question09: '',
        question10: '',
        question11: '',
        question12: '',
        question13: '',
        question14: '',
        question15: '',
        question16: '',
        question17: '',
        question18: '',
    });
    const onChangeForm = ({target:{name, value}}) => setForm({ ...form, [name]: value});
    const onSubmitNewMedicInterview = async (e) => {
        try {
          const user = Storagecito.get('user');
          
          const response = await axios.post(`http://localhost:5000/medic_interviews/add`, {form, user})
        } catch (error) {
                                               
        }
    }
    console.log('form: ', form)

    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Rut del paciente:</label>
                <input type="text" name="rut_pat" value={form.rut_pat} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Peso del paciente:</label>
                <input type="text" name="question01" value={form.question01} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Altura del paciente:</label>
                <input type="text" name="question02" value={form.question02} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Fecha de nacimiento del paciente:</label>
                <input type="text" name="question03" value={form.question03} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Edad para inicio de menopausia (en caso de ser paciente masculino, o no tener, ingresar un 0):</label>
                <input type="text" name="question04" value={form.question04} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Consumo de tabaco por año:</label>
                <input type="text" name="question05" value={form.question05} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Consumo de alcohol por año:</label>
                <input type="text" name="question06" value={form.question06} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Historia de fractura por fragilidad:</label>
                <input type="text" name="question07" value={form.question07} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Urolitiasis cálcica:</label>
                <input type="text" name="question08" value={form.question08} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Ulcera péptica:</label>
                <input type="text" name="question09" value={form.question09} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Hipertensión arterial:</label>
                <input type="text" name="question10" value={form.question10} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Antecedente familiar: fracturas de femur madre o padre:</label>
                <input type="text" name="question11" value={form.question11} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Antecedente familiar: cálculos urinarios de calcio:</label>
                <input type="text" name="question12" value={form.question12} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Antecedente familiar: endocrinopatía:</label>
                <input type="text" name="question13" value={form.question13} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Antecedente familiar: úlcera péptica:</label>
                <input type="text" name="question14" value={form.question14} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Datos clínicos y terapéuticos: dolor óseo o articular:</label>
                <input type="text" name="question15" value={form.question15} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Datos clínicos y terapéuticos: manifestaciones gastrointestinales:</label>
                <input type="text" name="question16" value={form.question16} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Datos clínicos y terapéuticos: manifestaciones neuromusculares y neuropsíquicas:</label>
                <input type="text" name="question17" value={form.question17} onChange={onChangeForm} class="form-control"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Datos clínicos y terapéuticos: presión arterial:</label>
                <input type="text" name="question18" value={form.question18} onChange={onChangeForm} class="form-control"/>
            </div>


            <Button onClick={onSubmitNewMedicInterview}>Enviar</Button>
        </form>
  )
};

export default New_patient_info;

/*
<button onClick={props.handleLogout}>Finalizar sesión</button>*/