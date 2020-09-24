import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import FormTextInput from "./FormTextInput";
import FormButton from "./FormButton";
import TextButton from "./TextButton";
import { screenWidth } from "../../utils/screenSize";
import api from "../../utils/api";
import { AsyncStorage, Alert } from "react-native";

export default () => {
  const navigation = useNavigation();
  const [id, setId] = useState("smsmsmsmin");
  const [password, setPassword] = useState("Passw0rd!");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getAuth = async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) {
        api.defaults.headers.common["Authorization"] = accessToken;
        navigation.navigate('Main', { screen: 'Home' });
        return;
      }
      setIsLoaded(true);
    };

    getAuth();
  }, []);

  const handlePress = async () => {
    try {
      console.log(id, password);
      const {
        data: { accessToken },
      } = await api.post("/auth/login", {
        username: id,
        password,
      });
      await AsyncStorage.setItem("accessToken", accessToken);
      api.defaults.headers.common["Authorization"] = accessToken;
      navigation.navigate("Main", { screen: "Home" });
    } catch ({
      response: {
        data: { message },
      },
    }) {
      console.log(message);
      Alert.alert(message);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <RelativeContainer>
      <ContentWrapper>
        <LogoImage source={require("../../assets/logo-white.png")} />
        <HeaderTitle>
          당신의 작품을,{"\n"}
          <HeaderBiggerTitle>널리</HeaderBiggerTitle>
        </HeaderTitle>
        <FormContainer>
          <FormTextInput
            field="아이디"
            placeholder="아이디를 입력하세요."
            value={id}
            onChangeText={(value) => setId(value)}
          />
          <FormTextInput
            field="비밀번호"
            placeholder="비밀번호를 입력하세요."
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <ButtonContainer>
            <FormButton onPress={handlePress}>로그인</FormButton>
            <FormButton
              isPrimary
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate('Join')}
            >
              회원가입
            </FormButton>
          </ButtonContainer>
          <TextButton style={{ marginTop: 18 }}>
            비밀번호를 잊으셨나요?
          </TextButton>
        </FormContainer>
      </ContentWrapper>
    </RelativeContainer>
  );
};

const RelativeContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
})`
  flex: 1;
  background-color: #a68be7;
`;

const ContentWrapper = styled.View`
  padding-top: ${screenWidth * 0.15}px;
  padding-bottom: ${screenWidth * 0.15}px;
  align-items: center;
  width: 100%;
`;

const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: ${screenWidth * 0.46 + 40}px;
  height: ${screenWidth * 0.45 + 40}px;
`;

const HeaderTitle = styled.Text`
  font-size: 30px;
  font-weight: 300;
  line-height: ${30 * 1.54}px;
  color: #ffffff;
  text-align: center;
  margin-top: 12.9px;
  margin-bottom: 21px;
`;

const HeaderBiggerTitle = styled.Text`
  font-size: 42px;
  line-height: ${42 * 1.54}px;
`;

const FormContainer = styled.View``;

const ButtonContainer = styled.View`
  margin-top: 14px;
`;
