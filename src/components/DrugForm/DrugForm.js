import React, {Fragment} from "react";
import {reduxForm, Field, FieldArray} from "redux-form";
import {ScrollView, Text, View} from "react-native";
import {validate} from "./validate";
import {InputField} from "./InputField";
import AddLocation from "../AddLocation";
import {Button} from "../Button";
import styles from "./DrugForm.styles";

export const renderDrugsList = ({fields, meta: {error, submitFailed}}) => (
  <Fragment>
    <Field name="zipCode" component={AddLocation} />
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
    {submitFailed && error && <Text style={styles.errorText}>{error}</Text>}
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

export const MyForm = ({handleSubmit, submitting}) => (
  <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
    <FieldArray name="drugsList" component={renderDrugsList} />
    <Button
      disabled={submitting}
      style={styles.submitBtn}
      onClick={handleSubmit}
      type="secondary"
      right="md-arrow-dropright"
      size={20}
      middle="SUBMIT"
      iconSet="Ionicons"
    />
  </ScrollView>
);

export default reduxForm({
  form: "drugsForm",
  validate,
})(MyForm);
