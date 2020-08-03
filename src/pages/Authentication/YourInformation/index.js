import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";

import styles from "./styles";
import { colors } from "../../../constants/colors";

export default function YourInformation() {
  const navigation = useNavigation();

  const nameRef = useRef(null);
  const birthdateRef = useRef(null);
  const passwordRef = useRef(null);

  const FormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string().required("Required"),
    birthdate: Yup.string().required("Required"),
    password: Yup.string()
      .min(6)
      .max(15)
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
        "Pelo menos uma letra e um numero"
      ),
  });

  function handleNavigateSuccess() {
    navigation.navigate("Success");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btnGoBack}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color={colors.dark} />
      </TouchableOpacity>
      <Text style={styles.title}>Fill your information</Text>
      <Text style={styles.subTitle}>Enter your details</Text>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{ email: "", name: "", birthdate: "", password: "" }}
          onSubmit={(values) => console.log("VALUE", values)}
          validationSchema={FormSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text style={styles.inputLabel}>Enter your email</Text>
              <View
                style={[
                  styles.viewInput,
                  {
                    borderColor: errors.email ? "red" : null,
                    borderWidth: errors.email ? 0.5 : 0,
                  },
                ]}
              >
                <TextInput
                  placeholder="email@email.com"
                  placeholderTextColor={colors.dark}
                  style={styles.input}
                  value={values.email}
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  keyboardType="email-address"
                  onSubmitEditing={() => nameRef.current.focus()}
                  returnKeyLabel="next"
                  returnKeyType="next"
                />
              </View>
              <Text style={styles.textPhone}>Enter your name and surname</Text>
              <View
                style={[
                  styles.viewInput,
                  {
                    borderColor: errors.name ? "red" : null,
                    borderWidth: errors.name ? 0.5 : 0,
                  },
                ]}
              >
                <TextInput
                  ref={nameRef}
                  placeholder="Thiago Silva"
                  placeholderTextColor={colors.dark}
                  values={values.name}
                  onBlur={handleBlur("name")}
                  onChangeText={handleChange("name")}
                  autoCompleteType="name"
                  style={styles.input}
                  onSubmitEditing={() => birthdateRef.current.focus()}
                  returnKeyLabel="next"
                  returnKeyType="next"
                />
              </View>
              <Text style={styles.textPhone}>Data of birth</Text>

              <View
                style={[
                  styles.viewInput,
                  {
                    borderColor: errors.birthdate ? "red" : null,
                    borderWidth: errors.birthdate ? 0.5 : 0,
                  },
                ]}
              >
                <TextInput
                  ref={birthdateRef}
                  placeholder="20.07.1998"
                  placeholderTextColor={colors.dark}
                  value={values.birthdate}
                  onBlur={handleBlur("birthdate")}
                  onChangeText={handleChange("birthdate")}
                  style={styles.input}
                  onSubmitEditing={() => passwordRef.current.focus()}
                  returnKeyLabel="next"
                  returnKeyType="next"
                />
              </View>
              <Text style={styles.textPhone}>Enter your password</Text>

              <View
                style={[
                  styles.viewInput,
                  {
                    borderColor: errors.password ? "red" : null,
                    borderWidth: errors.password ? 0.5 : 0,
                  },
                ]}
              >
                <TextInput
                  ref={passwordRef}
                  placeholder="************"
                  secureTextEntry={true}
                  placeholderTextColor={colors.dark}
                  value={values.password}
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                  autoCompleteType="password"
                  style={styles.input}
                  returnKeyLabel="send"
                  returnKeyType="send"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>
              {errors.password ? (
                <Text style={styles.textValidationPassword}>
                  Password must contain at least 2 characters
                </Text>
              ) : null}

              <View style={styles.viewGroupButton}>
                <RectButton
                  style={styles.buttonStart}
                  onPress={handleNavigateSuccess}
                >
                  <Text style={styles.buttonStartText}>Continue</Text>
                </RectButton>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
