import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    /** Số trang hiển thị xung quanh trang hiện tại */
    siblingCount?: number;
}

/**
 * Pagination Component
 * 
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => setCurrentPage(page)}
 * />
 */
export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}: PaginationProps) {
    // Generate page numbers to display
    const getPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];

        // Always show first page
        pages.push(1);

        const leftSibling = Math.max(2, currentPage - siblingCount);
        const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount);

        // Add dots if there's a gap after first page
        if (leftSibling > 2) {
            pages.push("...");
        }

        // Add pages around current page
        for (let i = leftSibling; i <= rightSibling; i++) {
            if (i !== 1 && i !== totalPages) {
                pages.push(i);
            }
        }

        // Add dots if there's a gap before last page
        if (rightSibling < totalPages - 1) {
            pages.push("...");
        }

        // Always show last page (if > 1)
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pageNumbers = getPageNumbers();

    if (totalPages <= 1) return null;

    return (
        <View style={styles.container}>
            {/* Previous Button */}
            <TouchableOpacity
                style={[
                    styles.arrowButton,
                    currentPage === 1 && styles.arrowButtonDisabled,
                ]}
                onPress={handlePrevious}
                disabled={currentPage === 1}
                activeOpacity={0.7}
            >
                <Ionicons
                    name="chevron-back"
                    size={20}
                    color={currentPage === 1 ? "#CBD5E1" : "#475569"}
                />
            </TouchableOpacity>

            {/* Page Numbers */}
            <View style={styles.pagesContainer}>
                {pageNumbers.map((page, index) => {
                    if (page === "...") {
                        return (
                            <View key={`dots-${index}`} style={styles.dots}>
                                <Text style={styles.dotsText}>...</Text>
                            </View>
                        );
                    }

                    const pageNum = page as number;
                    const isActive = pageNum === currentPage;

                    return (
                        <TouchableOpacity
                            key={pageNum}
                            style={[
                                styles.pageButton,
                                isActive && styles.pageButtonActive,
                            ]}
                            onPress={() => onPageChange(pageNum)}
                            activeOpacity={0.7}
                        >
                            <Text
                                style={[
                                    styles.pageText,
                                    isActive && styles.pageTextActive,
                                ]}
                            >
                                {pageNum}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Next Button */}
            <TouchableOpacity
                style={[
                    styles.arrowButton,
                    currentPage === totalPages && styles.arrowButtonDisabled,
                ]}
                onPress={handleNext}
                disabled={currentPage === totalPages}
                activeOpacity={0.7}
            >
                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={currentPage === totalPages ? "#CBD5E1" : "#475569"}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    arrowButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#F1F5F9",
        alignItems: "center",
        justifyContent: "center",
    },
    arrowButtonDisabled: {
        backgroundColor: "#F8FAFC",
    },
    pagesContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    pageButton: {
        minWidth: 40,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
    },
    pageButtonActive: {
        backgroundColor: "#3B82F6",
    },
    pageText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#475569",
    },
    pageTextActive: {
        color: "#FFFFFF",
    },
    dots: {
        width: 32,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    dotsText: {
        fontSize: 14,
        color: "#94A3B8",
    },
});
