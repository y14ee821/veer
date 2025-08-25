import React, { useRef } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

export const HorizontalScroller = ({ children, itemWidth = 120, style }) => {
  const scrollRef = useRef(null);

  const scrollBy = (offset) => {
    scrollRef.current?.scrollTo({ x: offset, animated: true });
  };

  let currentOffset = 0;

  const handleScroll = (event) => {
    currentOffset = event.nativeEvent.contentOffset.x;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.arrowLeft}
        onPress={() => scrollBy(currentOffset - itemWidth * 2)}
      >
        <Text style={styles.arrowText}>{"‹"}</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {children}
      </ScrollView>
      <TouchableOpacity
        style={styles.arrowRight}
        onPress={() => scrollBy(currentOffset + itemWidth * 2)}
      >
        <Text style={styles.arrowText}>{"›"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", position: "relative" },
  arrowLeft: {
    position: "absolute",
    left: 0,
    zIndex: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  arrowRight: {
    position: "absolute",
    right: 0,
    zIndex: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  arrowText: { fontSize: 24, color: "#2874f0", fontWeight: "bold" },
});