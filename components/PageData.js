import React from 'react';
import { View, Text } from 'react-native';

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <Text style={{ ...(image !== null ? styles.titleNoImage : styles.title), ...(isLight ? styles.titleLight : {}) }}>
        {title}
      </Text>
      <Text style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}) }}>
        {subtitle}
      </Text>
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#1d1e20',
    paddingBottom: 15,
    marginTop: 110,
    backgroundColor: 'transparent',
  },
  titleNoImage: {
    textAlign: 'center',
    fontSize: 20,
    color: '#1d1e20',
    paddingBottom: 15,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1d1e20',
    backgroundColor: 'transparent',
    marginLeft: 40,
    marginRight: 40,
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default PageData;
