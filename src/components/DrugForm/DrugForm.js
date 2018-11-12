import React, {Fragment} from "react";
import {reduxForm, Field, FieldArray} from "redux-form";
import {ScrollView, Text, View} from "react-native";
import {InputField} from "./InputField";
import {Button} from "../Button";
import styles from "./DrugForm.styles";
import {colors} from "../../constants/Colors";

export const renderDrugsList = ({fields}) => (
  <Fragment>
    <View styles={styles.row}>
      <Button
        type="secondary"
        left="md-add"
        size={20}
        middle="Add"
        iconSet="Ionicons"
        onClick={() => fields.push({})}
      />
      <Button
        type="secondary"
        left="md-remove"
        size={20}
        middle="Remove"
        iconSet="Ionicons"
        onClick={() => fields.remove(fields.length - 1)}
      />
    </View>
    <View key="drug_0">
      <Field name="drug_0" component={InputField} placeholder="Add a drug" />
    </View>
    {fields.map((drug, index) => (
      <View key={`drug_${index + 1}`}>
        <Field
          name={`drug_${index + 1}`}
          component={InputField}
          placeholder="Add a drug"
        />
      </View>
    ))}
  </Fragment>
);

export const MyForm = props => (
  <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
    <FieldArray name="drugsList" component={renderDrugsList} />
    <Button
      style={styles.submitBtn}
      onClick={props.handleSubmit}
      type="secondary"
      right="md-arrow-dropright"
      size={20}
      middle="SUBMIT"
      iconSet="Ionicons"
    />
  </ScrollView>
);

export default reduxForm({
  form: "drugsFrom",
})(MyForm);
