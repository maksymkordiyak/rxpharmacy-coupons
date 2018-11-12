import React, {Fragment} from "react";
import {reduxForm, Field, FieldArray} from "redux-form";
import {ScrollView, Text, View} from "react-native";
import {InputField} from "./InputField";
import AddLocation from "../AddLocation";
import {Button} from "../Button";
import styles from "./DrugForm.styles";
import {
  HelveticaMediumText,
  HelveticaRegularText,
  HelveticaBoldText,
} from "../StyledText";

export const renderDrugsList = ({fields}) => (
  <Fragment>
    <Field name="zipCode" component={AddLocation} />

    <View style={styles.optionsRow}>
      <View>
        <HelveticaMediumText style={styles.prescriptions}>
          Number of Prescriptions:{" "}
          <HelveticaBoldText style={styles.prescriptionsNumber}>
            {fields.length + 1}
          </HelveticaBoldText>
        </HelveticaMediumText>
      </View>
      <View style={styles.quantityButtons}>
        <View>
          <Button
            type="secondary"
            left="md-remove"
            size={20}
            iconSet="Ionicons"
            onClick={() => fields.remove(fields.length - 1)}
          />
        </View>
        <View style={styles.addButton}>
          <Button
            type="secondary"
            left="md-add"
            size={20}
            iconSet="Ionicons"
            onClick={() => fields.push({})}
          />
        </View>
      </View>
    </View>
    <View style={styles.promoTextContainer}>
      <HelveticaRegularText style={styles.promo}>
        Add prescriptions to your list to {"\n"} the pharmacy with the best
        savings.
      </HelveticaRegularText>
    </View>
    <View key="drug_0">
      <Field name="drug_0" component={InputField} placeholder="Add a drug" />
    </View>
    {fields.map((drug, index) => {
      const properIndex = index + 1;

      return (
        <View key={`drug_${properIndex}`}>
          <Field
            name={`drug_${properIndex}`}
            component={InputField}
            placeholder="Add a drug"
            index={properIndex}
          />
        </View>
      );
    })}
  </Fragment>
);

export const MyForm = ({handleSubmit}) => (
  <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
    <FieldArray name="drugsList" component={renderDrugsList} />
    <Button
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
  form: "drugsFrom",
})(MyForm);
