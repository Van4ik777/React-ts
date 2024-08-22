import { useForm, SubmitHandler } from "react-hook-form";
import "./CreateTodoForm.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface MyInputs {
    title: string;
    text: string;
    date: Date | null;
}

interface Props {
    show: boolean;
    handleCloseForm: () => void;
    handelSave: (newTodo: { title: string; text: string; date: Date | null; }) => void;
}

export const CreateTodoForm = ({ show, handleCloseForm, handelSave }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<MyInputs>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [isDatePickerOpen, setDatePickerOpen] = useState<boolean>(false);  

    if (!show) {
        return null;
    }

    const onSubmit: SubmitHandler<MyInputs> = (data) => {
        handelSave({ ...data, date: startDate });
        reset();
        handleCloseForm();
    };

    const toggleDatePicker = () => {
        setDatePickerOpen(!isDatePickerOpen);
    };

    const clearDate = () => {
        setStartDate(null);
        setDatePickerOpen(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New Task</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Title:
                        <br />

                        <input
                            {...register("title", {
                                required: "Title is required",
                                maxLength: {
                                    value: 25,
                                    message: "Maximum 10 symbols in title"
                                }
                            })}
                        />
                        {errors.title && <p className="error-message">{errors.title.message}</p>}
                    </label>
                    <label>
                        Text:
                        <br />

                        <textarea
                            {...register("text", {
                                required: "Text is required",
                                maxLength: {
                                    value: 100,
                                    message: "Maximum 100 symbols in text"
                                }
                            })}
                        />
                        {errors.text && <p> className="error-message"{errors.text.message}</p>}
                    </label>
                    <div className="date-picker-buttons">
                        <button 
                            type="button" 
                            className="date-picker-button" 
                            onClick={toggleDatePicker}
                        >
                            {startDate ? startDate.toLocaleDateString('ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }) : 'Выбрать дату'}
                        </button>
                        <button 
                            type="button" 
                            className="date-clear-button" 
                            onClick={clearDate}
                        >
                            Без даты
                        </button>
                    </div>
                    {isDatePickerOpen && (
                        <div style={{ position: 'relative' }}>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date | null) => {
                                    setStartDate(date);
                                    setDatePickerOpen(false);
                                }}
                                inline
                            />
                        </div>
                    )}
                    <br />
                    <button type="submit" className="save-button">Save</button>
                    <button type="button" className="cancel-button" onClick={handleCloseForm}>Cancel</button>
                </form>
            </div>
        </div>
    );
};
