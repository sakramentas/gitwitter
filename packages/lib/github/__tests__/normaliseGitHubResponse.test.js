import { normaliseGitHubResponse } from '../normaliseGitHubResponse';
import mockData from './mock-data';

describe('normaliseGitHubResponse', () => {
  it('should normalise the response with relevant data', () => {
    const normalisedRes = JSON.stringify(normaliseGitHubResponse(mockData));
    const expectedNormalisedRes =
      '[{"id":3606624,"name":"ReactiveCocoa","description":"Reactive extensions to Cocoa frameworks, built on top of ReactiveSwift","language":"Swift"},{"id":12576526,"name":"reactive","ownerId":"dotnet","description":"The Reactive Extensions for .NET","language":"C#"},{"id":715082,"name":"ReactiveUI","ownerId":"reactiveui","description":"An advanced, composable, functional reactive model-view-viewmodel framework for all .NET platforms that is inspired by functional reactive programming. ReactiveUI allows you to abstract mutable state away from your user interfaces, express the idea around a feature in one readable place and improve the testability of your application.","language":"C#"},{"id":33569135,"name":"RxSwift","ownerId":"ReactiveX","description":"Reactive Programming in Swift","language":"Swift"},{"id":59369770,"name":"ReactiveSwift","ownerId":"ReactiveCocoa","description":"Streams of values over time","language":"Swift"}]';

    expect(normalisedRes).toEqual(expectedNormalisedRes);
  });
});
