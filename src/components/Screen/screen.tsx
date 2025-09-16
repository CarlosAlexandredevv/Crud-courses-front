import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = PropsWithChildren & {
  scrollable?: boolean;
  className?: string;
};

export function Screen({
  children,
  scrollable = false,
  className,
}: ScreenProps) {
  const Container = scrollable ? ScrollView : View;

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView className={`flex-1 ${className}`}>
        <Container showsVerticalScrollIndicator={false}>{children}</Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
