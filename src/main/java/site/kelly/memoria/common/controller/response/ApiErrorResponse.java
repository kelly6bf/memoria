package site.kelly.memoria.common.controller.response;

import org.springframework.util.Assert;

import lombok.Builder;

public record ApiErrorResponse(String message) {

    @Builder
    public ApiErrorResponse {
        Assert.hasText(message, "에러 메시지 내용은 필수값입니다.");
    }
}
