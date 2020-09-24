import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import styled, { css } from 'styled-components/native';

import FormButton from './FormButton';
import PieceItem from './PieceItem';
import PieceViewer from './PieceViewer';
import CreatePieceButton from './CreatePieceButton';
import Button from '../../components/Button';
import FormTextInput from './FormTextInput';
import { screenWidth } from '../../utils/screenSize';
import BottomModal from './BottomModal';

import { frames, backgrounds } from './assets';

export default ({ imageURLs }: { imageURLs: string[] }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFrame, setSelectedFrame] = useState<number | undefined>();
  const [isFrame, setIsFrame] = useState(false);
  const firstModalRef = useRef<any>();
  const secondModalRef = useRef<any>();

  useEffect(() => setSelectedImage(imageURLs[0]), []);

  const onPressOpenFirstModal = () => {
    if (firstModalRef && firstModalRef.current)
      firstModalRef?.current?.open();
  }

  const onPressOpenSecondModal = () => {
    if (firstModalRef && firstModalRef.current)
      firstModalRef?.current?.close();
    if (secondModalRef && secondModalRef.current)
      secondModalRef?.current?.open();
  }

  const onClickCreatePiece = () => {
    ImagePicker.showImagePicker({
      title: '작품 업로드',
      cancelButtonTitle: '취소',
      takePhotoButtonTitle: '사진 촬영하기',
      chooseFromLibraryButtonTitle: '앨범에서 가져오기',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log(source);
      }
    });
  };

  return (
    <Container>
      <TopList>
        <CreatePieceButton
          onPress={onClickCreatePiece}
        />
        {imageURLs.map((image, index) => (
          <PieceItem
            key={`image-${index}`}
            index={index + 1}
            source={{ uri: image }}
            isSelected={image === selectedImage}
            onPress={() => setSelectedImage(image)}
          />
        ))}
        <Dummy />
      </TopList>
      <Wrapper>
        <PieceContainer>
          <PieceViewer image={selectedImage} frame={selectedFrame} />
        </PieceContainer>
        <BottomButton isPrimary onPress={onPressOpenFirstModal}>
          작품 설정 시작하기
        </BottomButton>
      </Wrapper>
      <BottomModal
        modalRef={firstModalRef}
        height={414}
        bottomComponent={(
          <ButtonList>
            <FormButton>이전</FormButton>
            <FormButton
              isPrimary
              onPress={onPressOpenSecondModal}
            >
              스타일 설정
            </FormButton>
          </ButtonList>
        )}
      >
        <FormTextInput
          field="작품 이름"
          placeholder="작품 이름을 입력해 주세요."
        />
        <FormTextInput
          field="설명"
          placeholder="작품 설명을 입력해 주세요."
          style={{ height: 150 }}
          multiline
          textAlignVertical="top"
        />
      </BottomModal>
      <BottomModal
        modalRef={secondModalRef}
        height={664}
        closeOnSwipeDown={false}
        bottomComponent={(
          <ButtonList>
            <FormButton
              onPress={() => {
                if (secondModalRef && secondModalRef.current)
                  secondModalRef?.current?.close();
                onPressOpenFirstModal();
              }}
            >
              이전
            </FormButton>
            <FormButton
              isPrimary
              onPress={() => {
                if (secondModalRef && secondModalRef.current)
                  secondModalRef?.current?.close();
              }}
            >
              닫기
            </FormButton>
          </ButtonList>
        )}
      >
        <TabSelector>
          <TouchableWrapper onPress={() => setIsFrame(false)}>
            <TabItem isSelected={!isFrame}>
              <TabItemText isSelected={!isFrame}>
                배경
              </TabItemText>
            </TabItem>
          </TouchableWrapper>
          <TouchableWrapper onPress={() => setIsFrame(true)}>
            <TabItem isSelected={isFrame}>
              <TabItemText isSelected={isFrame}>
                액자
              </TabItemText>
            </TabItem>
          </TouchableWrapper>
        </TabSelector>
        <ScrollView isFrame={isFrame}>
          <TouchableOpacity activeOpacity={1}>
            {isFrame ? (
              <ItemList>
                {frames._1t1.map((image, index) => (
                  <TouchableWrapper key={index} onPress={() => setSelectedFrame(index)}>
                    <ItemImage source={image} isFrame isSelected={selectedFrame === index} />
                  </TouchableWrapper>
                ))}
              </ItemList>
            ) : (
              <ItemList>
                {backgrounds.map((image, index) => (
                  <TouchableWrapper key={index}>
                    <ItemImage source={image} />
                  </TouchableWrapper>
                ))}
              </ItemList>
            )}
            </TouchableOpacity>
        </ScrollView>
      </BottomModal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const TopList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: ${screenWidth}px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 18px;
`;

const Dummy = styled.View`
  width: 25px;
  height: 20px;
`;

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  height: 610px;
`;

const PieceContainer = styled.View`
  /* background-color: #EEE9E6; */
  background-color: white;
  position: relative;
  width: ${screenWidth}px;
  height: ${screenWidth}px;
  align-items: center;
  justify-content: center;
`;

const BottomButton = styled(Button).attrs({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20 * 1.2,
  },
})`
  margin-top: 20px;
  padding: 16px 0;
  width: ${screenWidth * 0.85}px;
`;

const ButtonList = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  flex-direction: row;
`;

const TabSelector = styled.View`
  flex-direction: row;
  width: 100%;
`;

interface IIsSelected {
  isSelected?: boolean;
}

const TabItem = styled.View<IIsSelected>`
  width: 50%;
  padding: 10.5px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: #707070;

  ${({ isSelected }) => isSelected && css`
    border-bottom-color: #7a5cc4;
  `};
`;

const TabItemText = styled.Text<IIsSelected>`
  font-weight: bold;
  font-size: 18px;
  line-height: ${18 * 1.22}px;
  color: #707070;

  ${({ isSelected }) => isSelected && css`
    color: #7a5cc4;
  `};
`;

interface IScrollView {
  isFrame?: boolean;
}

const ScrollView = styled.ScrollView<IScrollView>`
  flex: 1;
  margin-top: 20.5px;
  margin-bottom: 65px;
  width: ${screenWidth - 26.5}px;
  margin-left: 4px;

  ${({ isFrame }) => isFrame && css`
    width: ${screenWidth - 18}px;
    margin-left: 3px;
  `};
`;

const ItemList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

interface IItemImage extends IIsSelected, IScrollView {}

const ItemImage = styled.Image.attrs({
  resizeMode: 'contain',
})<IItemImage>`
  width: 95px;
  height: 110px;
  margin-bottom: 28.3px;
  margin-right: 26.5px;

  ${({ isSelected }) => isSelected && css`
    border: 3px solid #7a5cc4;
  `};

  ${({ isFrame }) => isFrame && css`
    width: 101px;
    height: 101px;
    margin-right: 18px;
  `};
`;

const TouchableWrapper = styled.TouchableWithoutFeedback`
`;
