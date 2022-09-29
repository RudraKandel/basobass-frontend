//droppdown  and input

<div>
    <div className={style.input_dropdown}>
                            <input className={style.input_type_1} type="text" placeholder=" eg: 4" ></input>

                            <div className={style.dropdown_type_1}>
                                <select
                                    name="aana"
                                    id="aana"
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value="Aana"
                                        selected
                                        hidden
                                        disabled>Aana</option>
                                </select>
                            </div>
                        </div>

//  dropdown only
<div className={style.dropdown_only}>
                                <select
                                    name=""
                                    id=""
                                    // onChange={handleChange("designation")}
                                    required
                                >
                                    <option value=""
                                        selected
                                        hidden
                                        disabled>Select Area Metric</option>
                                </select>
                            </div>

//input only
<div>
                            <input className={style.input_only} type="text" placeholder="Property Area" ></input>
                        </div>
</div>